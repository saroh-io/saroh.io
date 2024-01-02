import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Editor from "@/components/editor";

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const session = await getSession();
	if (!session) {
		redirect("/login");
	}
	const data = await prisma.post.findUnique({
		where: {
			id: params.slug,
		},
		include: {
			site: {
				select: {
					subdomain: true,
				},
			},
		},
	});
	if (!data || data.userId !== session.user.id) {
		notFound();
	}

	return <Editor post={data} />;
}
