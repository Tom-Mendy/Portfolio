import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const projects = import.meta.glob('/src/lib/content/projects/*.md', { eager: true });

	const items = Object.entries(projects).map(([path, file]: [string, any]) => {
		const slug = path.split('/').pop()?.replace('.md', '');
		return {
			slug,
			...file.metadata
		};
	});

	return {
		projects: items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
};
