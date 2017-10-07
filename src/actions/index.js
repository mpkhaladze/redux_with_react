export function selectBook(book) {
	//console.log(BOOK_SELECTED);
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}