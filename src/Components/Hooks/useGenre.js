const useGenre = (selectedGenre) => {
    if(selectedGenre.length < 1) return " ";

    const genreIDS = selectedGenre.map((g) => g.id);
    return genreIDS.reduce((acc,curr) => 
     acc + "," + curr
    )
}

export default useGenre