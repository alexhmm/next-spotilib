import { getPlaylist } from './page';

export default async function Head({
  params: { id },
}: {
  params: { id: string };
}) {
  const playlist = await getPlaylist(id);

  return (
    <>
      <title>{`${playlist?.name} • Spotilib`}</title>
    </>
  );
}
