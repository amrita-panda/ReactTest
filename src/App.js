import './App.css';
import CommentBox from './components/commentBox/CommentBox';
import CommentList from './components/commentList/CommentList';
import Dataset from './components/dataset/Dataset';
import Counter from './components/counter/Counter';
import GuessedWords from './components/guessedWords/GuessedWords';
import Congrats from './components/congrats/Congrats';
import Input from './components/input/Input';
import TestExample from './components/testExample/TestExample';

function App() {
  return (
    <div >
      <Dataset></Dataset>
     <CommentBox></CommentBox>
     <CommentList></CommentList>
     <Counter></Counter>
     <div className='ml-3 form-div'>
       <h3 className='text-center'>Jotto Playground</h3>
       <Congrats success={true}></Congrats>
       <Input />
       <GuessedWords guessedWords={[{'guessedWord':'train','letterMatchCount':3}]}></GuessedWords>
     </div>
     <TestExample ></TestExample>
    </div>
  );
}

export default App;
