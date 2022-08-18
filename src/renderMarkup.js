export function renderGalleryMarkup({ data: { hits } }) {
  return hits.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (
        acc +
        `<div class="photo-card">
          <a class="photo-bigLink" href="${largeImageURL}">
          <img class="photo-smallLink" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span class="dynamic-info">${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span class="dynamic-info">${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span class="dynamic-info">${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span class="dynamic-info">${downloads}</span>
            </p>
          </div>
        </div>`
      );
    },
    ''
  );
}
