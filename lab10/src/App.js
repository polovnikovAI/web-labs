import './App.css';
import Card from './components/Card/Card';
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

function App() {
    return (
        <div className='App'>
            <h1>Что Вам необходимо?</h1>
            <div className='wrapper'>
                <Card
                    number_of_block={'Первый'}
                    picture={img1}
                />
                <Card
                    number_of_block={'Второй'}
                    picture={img2}
                />
                <Card
                    number_of_block={'Третий'}
                    picture={img3}
                />
            </div>
        </div>
    );
}

export default App;
