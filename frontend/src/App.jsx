import Navbar from "../src/components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./pages/register/Register";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";

import Footer from "../src/components/Footer/Footer";

import Test from "./pages/test/Test";

import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PostForm } from "./components/Post/PostForm";
import { PostFormEditor } from "./components/Post/PostFormEditor";
import { AuthGuard } from "./guards/auth.guards";
import UserPosts from "./pages/posts/UserPosts";

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200">
  
      <Provider store={store}>
     
        <Navbar />
      
        {/* <Register />
      <Posts/> */}
        <Routes>
        <Route path="upload" element={<PostForm/> } />
        <Route path="/userPosts" element={<UserPosts />} />
        <Route path="postUpdate/:postId" element={<PostFormEditor />} />
        
        <Route path="/login" element={<Login />} />
           <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/*" element={<h2>NOT FOUND</h2>} />
          <Route path="/Test" element={<Test />} />
          <Route element={<AuthGuard/>} >
              <Route path="upload" element={<PostForm/> } />
              <Route path="/userPosts" element={<UserPosts />} />
              {/* <Route path="postUpdate/:postId" element={<PostFormEditor />} /> */}
          </Route>

        </Routes>
        
      <Footer />
      
     
      </Provider>
    </div>
  );
}

export default App;
