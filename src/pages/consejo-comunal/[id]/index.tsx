import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import { LayoutContent } from "~/components/Layout";
import { ConsejoInfor } from "~/components/consejo-comunal/ConsejoInfor";
import { EncargadosInfor } from "~/components/encargado-clap/EncargadosInfor";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const ssg = generateSSGHelper();
  const id = context?.params?.id;

  if (typeof id !== "string") throw new Error("no Id");

  await ssg.consejo.getById.prefetch({ id: parseInt(id) });

  return {
    props: {
      title: "Consejo Comunal",
      content: "Informacion del consejo comunal",
      trpcState: ssg.dehydrate(),
      id,
    },
  };
}

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <LayoutContent className="flex-col  ">
      <ConsejoInfor consejoId={props.id} />
      <EncargadosInfor consejoId={parseInt(props.id)} />
    </LayoutContent>
  );
};

export default Index;
