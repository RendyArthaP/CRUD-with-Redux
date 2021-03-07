import './App.css';
import { connect } from 'react-redux';
import { Card, Container } from 'react-bootstrap';

function App(props) {
  return (
    <div className="App">
      <h1>Kumpulan Buku:</h1>
      {props.state.map((judulBuku) => (
        <Container key={judulBuku.id}>
          <Card style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Body>
              <Card.Title>{judulBuku.judul}</Card.Title>
              <Card.Text>
                {judulBuku.penerbit}
              </Card.Text>
              <Card.Text>
                {judulBuku.harga}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.Title
  }
}

// const mapDispatchToProps = () => {

// }

export default connect(
  mapStateToProps, 
  null
)
(App);
