const initialState = [
  {
    id: 0,
    judul: "Buku programming",
    penerbit: "PT Suka-suka",
    harga: 80000
  },
  {
    id: 1,
    judul: "Buku react",
    penerbit: "PT Suka-nawar",
    harga: 90000
  },
  {
    id: 2,
    judul: "Buku vue",
    penerbit: "PT Suka-murah",
    harga: 100000
  },
  {
    id: 3,
    judul: "Buku angular",
    penerbit: "PT Suka-mahal",
    harga: 50000
  },
  {
    id: 4,
    judul: "Buku node",
    penerbit: "PT Suka-duka",
    harga: 85000
  },
]

const Title = (state = initialState, action) => {
  return state
}

export default Title