# Orthoberry card app

# Features

- Home page

  - Header (with Orthoberry logo and search bar)
    Header.jsx

  - Navbar (news feed, filter (categories and date), content portal entry icon)
    Navbar.jsx

  - Container 1 - Banner text (left) with main image (right) container
    Banner.jsx

  - Container 2 - Topics/Categories list (cards) with 'see more'
    horizontal carousel (no pagination required, fetch all at once)

    - Category (background color - gradient)
    - Only one category can be selected

    TopicCards.jsx

  - Container 3 - Snapshots/Cards with filter (date and category ), list and grid view - react-infinite-scroll-component

    - Input - card data
    - List View - Pagination (1,2,3)
    - Grid View - default with load on scroll

    Card.jsx, LisView.jsx, GridView.jsx

- Category View

  - Input - cardIDs array
  - Display same as container 3

  TopicsView.jsx

- Article View

  - Feed articles view
  - Centered box - Image, title, description, tags, source link (go to source - redirect), share icon on top right corner
  - When user clicks tag display cards on home page with selected category

  Article.jsx

  ***

  #Best practices

  - Each component source code line - max 100-150 lines
  - Use custom hooks for repeated API calls
  - Use redux
  - Use constants instead of hard coding
  - Use react-router-dom for routing
  - Be as modular as possible
