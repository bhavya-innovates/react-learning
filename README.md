#Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- Uses a File Watching algorithm
- Faster builds because of Caching
- Image Optimization
- Minification of files - during Production build
- Bundling
- Compress (files compressed - remove whit spaces, compress and ship to production)
- Consistent Hashing [read]
- Code splitting
- Differential bundling (to support older browsers)
- Better error handling
- Diagnostics
- also gives a way to host your app on HTTPS (other than HTTP)
- Tree shaking (remove unused code for you)
- Different build for dev and prod

# for dev build

- npx parcel index.html
- after adding script in package.json - npm run start/ npm start

# for prod build

- npx parcel build index.html
- after adding script in package.json - npm run build/ npm build

# Dist folder contain build files

# WHy is React faster

- Virtual DOM (diffing and reconciliation)
- Bundlers (Vite, Parcel, Webpack)
- Automatic Memoization in React Compilers

# broswerslist

- https://browserslist.dev/?q=bGFzdCA0IHZlcnNpb25z

# Food Ordering App

- Food Ordering App Basic Layout

- Header
  - Logo
  - Nav Items (Home, About, Cart, Login/SignUp)
- Body
  - Search Bar
  - Restaurant Cards Container
    - Restaurant Card (Image, Name, Cuisine, Rating)
- Footer
  - Copyright
  - Social Media Links
  - Address
  - Contact

  # Two types of export|import
  - Default export and import
    - export default Component;
    - import Component from 'path';
  - Named export and import
    - export const varName;
    - import { varName } from 'path';
