import { showAlert } from './Alert';

const handleSearchClick = (event: MouseEvent | KeyboardEvent) => {
  const input = document.querySelector('.search-input');

  if (!(input instanceof HTMLInputElement)) return;
  if (input.value === '') {
    showAlert('검색어를 입력해주세요', 3000);
    return;
  }

  event.target?.dispatchEvent(
    new CustomEvent('search', {
      bubbles: true,
      detail: input.value,
    }),
  );
};

const SearchBox = () => {
  const searchBox = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  searchBox.classList.add('search-box');
  searchInput.classList.add('search-input');
  searchButton.classList.add('search-button');

  searchInput.type = 'text';
  searchInput.placeholder = '검색';
  searchButton.textContent = '검색';

  searchBox.appendChild(searchInput);
  searchBox.appendChild(searchButton);

  searchButton.addEventListener('click', (event) => {
    handleSearchClick(event);
    searchInput.value = '';
  });

  searchInput.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (event.isComposing === false) {
        event.preventDefault();
        handleSearchClick(event);
        searchInput.value = '';
      }
    }
  });

  return searchBox;
};

export default SearchBox;
