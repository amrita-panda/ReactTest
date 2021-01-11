import logo from './logo.svg';
import './App.css';
import CommentBox from './components/commentBox/CommentBox';
import CommentList from './components/commentList/CommentList';
import Dataset from './components/dataset/Dataset';

function App() {
  return (
    <div >
      <Dataset></Dataset>
     <CommentBox></CommentBox>
     <CommentList></CommentList>
    </div>
  );
}

export default App;
