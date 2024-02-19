<h1> storyshelf-- 24S dali developer challenge </h1>
<h3> link to deployed site: https://storyshelf-414719.web.app/ </h3>
<h3> about the project </h3>
Storyshelf is a digital bookshelf website that allows users to signup, login, create bookshelves, add books to their shelves, and view a notebook page for each book. As an English major and huge reader, I've always wanted a way to track my book reading in a way that is community oriented, fun, and visual, rather than primarily text-based. I also like the idea that someone can screenshot their shelf or notes page and print it out, or that it could be an engaging way for kids to track their reading. 
There is both a community and individual view for the library that users can toggle between. When they create a shelf, it comes with an illustrated image, description, tags for the number of books and genres, and a tag for the user that created it. Inside each shelf page, users can see a collection of genre tags. When they add their first book, their shelf is populated (complete with a sleeping cat), and a book spine! Once a row is filled, the shelf grows dynamically. When they click on a book, they're taking to a page resembling a piece of notebook paper with sticky notes on it. I used API calls to Open Library to fetch information such as the book cover, the first sentence of the book, key subjects, ISBN #, and more! I chose Open Library because it was free, well established, and didn't require an API key. However, many records are incomplete and don't have every field completed. Even with an accurate path, some of the cover images are corrupted or not possible to access. I tried to add robust error handling of this, and put doodles on sticky notes with missing fields/information.

As a PM at DALI, I've gotten to learn a lot about how developers solve problems creatively, how to scope down features with limited time, and how to make a feature user friendly and visibly engaging! I'm proud of how I was able to learn new technologies quickly-- especially redux toolkit, and how I came up with new features as I developed (ex: the toggle button).
I think the hardest part of the project was coming up with a good architecture for what fields to include, and the flow from firebase, to the store, and to the rendered product. I originally started the project using redux and thunk, but realized that it wasn't the most efficient for what I was trying to accomplish. Moving to redux toolkit took a lot of self-learning and iteration, but ultimately allowed me to create the complete flow of the site!


<h3> tech stack </h3>
<ul> 
  <li>react for components and routing (+route guarding)</li>
  <li>firebase for database management and authentication</li>
  <li>redux toolkit for state management</li>
  <li>figma for rough wireframes, materialize css library to help with reusable styling</li>
</ul>

<h3> components </h3>
<ul> 
  <li>**authentication**: SignIn.js, SignUp.js</li>
  <li>**layout**: Landing.js, Navbar.js SignedInLinks.js, SignedOutLinks.js</li>
  <li>library page: Library.js, ShelfList.js, ShelfSummary.js, ShelfDetails.js, CreateShelf.js, DeleteShelf.js</li>
  <li>shelf page: ShelfDetails.js, CreateBooks.js, Books.js, Notes.js</li>
</ul>


<h3> where next? </h3>
If I were to continue working on this project, I would want to find a better way of fetching more information about each book, allow users to edit shelves and delete books, and edit their notes. I would try to offer more social options, such as comments and smaller library groups for friends. It would be interesting to use something like RAG to offer people personalized book reocmmendations based on the books in their shelves. 

<img width="473" alt="Screenshot 2024-02-18 at 9 41 57 PM" src="https://github.com/SanjanaRaj25/StoryShelf/assets/98998584/7eba361e-8daa-4602-ab73-e8974bd50668">
