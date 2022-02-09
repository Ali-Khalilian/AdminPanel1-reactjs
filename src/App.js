import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import MainContext from './contexts/MainContext';
import Sidebar from './Sidebar';
import Modal from './posts/Modal';
import CommentModal from './contexts/CommentModal';
import CommentsData from './contexts/CommentsData';


function App() {
  const [showMenu, setShowMenu] = useState();

  const [showComments, setShowComments] = useState(false);

  const[commentsDatas,setCommentsDatas] = useState([]);

  return (
    
      <BrowserRouter>
        <MainContext.Provider value={{ showMenu, setShowMenu }}>
          <CommentModal.Provider value={{ showComments, setShowComments }}>
            <CommentsData.Provider value={{commentsDatas,setCommentsDatas}}>
              <Modal />
              <Sidebar />
              <Content />
              </CommentsData.Provider>
          </CommentModal.Provider>
        </MainContext.Provider>
      </BrowserRouter>
    
  );
}

export default App;
