import './App.css';
import CommentBox from './components/commentBox/CommentBox';
import CommentList from './components/commentList/CommentList';
import Dataset from './components/dataset/Dataset';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div >
      <Dataset></Dataset>
     <CommentBox></CommentBox>
     <CommentList></CommentList>
     <Counter></Counter>
    </div>
  );
}

export default App;
