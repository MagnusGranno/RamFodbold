import React, { useState, UseEffect } from 'react';
// Components
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import MobileFooter from './MobileFooter';
import BlogPost from './BlogPost';
import testPic from '../Images/FrontPage.jpg';
const MobileHome = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="myBodyMobile">
      <MobileHeader checked={checked} setChecked={setChecked} />
      {checked ? (
        <MobileMenu />
      ) : (
        <div>
          <BlogPost
            header={'Velkommen til Ramløse Fodbold.'}
            body={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          <BlogPost
            header={'Sæsonen er startet!'}
            body={
              'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.'
            }
          />
          <BlogPost
            header={'Græsset er grønt, kom og spil'}
            body={
              'Vivamus quis sapien scelerisque, ultrices enim et, bibendum velit. Aenean in est sit amet massa cursus molestie quis quis purus. Aenean vestibulum, leo nec condimentum maximus, mauris ligula viverra diam, quis porttitor nunc odio eget neque. Nullam ultricies risus a velit bibendum, sit amet laoreet est fermentum. Aliquam semper accumsan porttitor. Fusce et venenatis nulla. Nam mollis leo non elit porttitor mollis. Suspendisse ac mi elit. Phasellus vulputate magna ut sapien vulputate aliquet. In tellus lectus, rhoncus nec faucibus sed, sollicitudin at erat. Nullam porta tincidunt sem sit amet bibendum. Vivamus sit amet nunc sed urna aliquet eleifend.'
            }
            pic={testPic}
          />
        </div>
      )}
      <MobileFooter />
    </div>
  );
};

export default MobileHome;
