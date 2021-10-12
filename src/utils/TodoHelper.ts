export const checkTodo = (medias: any, mediaId: any) => {
  // console.log(medias.find((x: any) => x.tmdbId === mediaId));
  // console.log(medias);
  if (medias) {
    const findTodo = medias.find((e: any) => e.mediaId === mediaId);

    if (findTodo) {
      return findTodo.status;
    }
  }

  return '';
};
