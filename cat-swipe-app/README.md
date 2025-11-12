# Cat Swipe App

## Overview
The Cat Swipe App is a single-page web application built with React that allows users to view a stack of cat images. Users can swipe right to like a cat image and swipe left to dislike it. At the end of the session, a summary of liked cats is displayed.

## Features
- Swipe right to like a cat image.
- Swipe left to dislike a cat image.
- View a summary of all liked cat images at the end.
- Fetches cat images from the Cataas API.
- Mobile-friendly design for a smooth user experience.

## Technologies Used
- React
- TypeScript
- Cataas API for cat images
- Custom hooks for managing state and swipe gestures

## Project Structure
```
cat-swipe-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CatCard.tsx
│   │   ├── SwipeStack.tsx
│   │   └── Summary.tsx
│   ├── hooks
│   │   ├── useCatImages.ts
│   │   └── useSwipeGestures.ts
│   ├── services
│   │   └── cataasApi.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cat-swipe-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Use swipe gestures on mobile devices to interact with the cat images.
- After swiping through the images, view the summary of liked cats.

## License
This project is licensed under the MIT License.