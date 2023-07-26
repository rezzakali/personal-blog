# Personal Blog Website

![Next.js](https://img.shields.io/badge/Next.js-13.4-blueviolet)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-2.2-brightgreen)
![Material Tailwind](https://img.shields.io/badge/Material%20Tailwind-0.5-yellow)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green)
![Mongoose](https://img.shields.io/badge/Mongoose-6.0-orange)
![JWT](https://img.shields.io/badge/JWT-8.5-red)
![bcrypt](https://img.shields.io/badge/bcrypt-5.0-blue)

A personal blog website built using Next.js with TypeScript, Tailwind CSS, Material Tailwind components, MongoDB database with Mongoose, and authentication using JWT and bcrypt.

## Features

- User authentication with JWT and bcrypt
- Create, read, update, and delete blog posts
- Responsive and visually appealing UI with Tailwind CSS and Material Tailwind components
- MongoDB database integration using Mongoose

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static typing.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [Material Tailwind](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/material) - A Material Design UI Kit built on top of Tailwind CSS.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database for scalable and flexible data storage.
- [Mongoose](https://mongoosejs.com/) - An elegant MongoDB object modeling tool for Node.js.
- [JWT](https://jwt.io/) - JSON Web Tokens for secure authentication.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - A library for hashing passwords.

## Getting Started

Follow the instructions below to set up the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/rezzakali/personal-blog.git
cd your-blog-website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Copy the `.env.example` file and rename it to `.env`. Fill in the required values for MongoDB connection and JWT secret.

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000` to see the application.

## Folder Structure

```
|-- components/         # Reusable components
|-- pages/              # Next.js pages and routes
|-- models/             # Mongoose schemas and models
|-- public/             # Static assets
|-- styles/             # Global styles and Tailwind CSS configurations
|-- utils/              # Utility functions and helper files
|-- .env.example        # Environment variables example
|-- .gitignore          # Git ignore file
|-- next.config.js      # Next.js configurations
|-- package.json        # Project dependencies
|-- tsconfig.json       # TypeScript configurations
|-- README.md           # Project README
```

## Contribution

Contributions are welcome! If you find any issues or have ideas for improvements, please submit an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Replace the placeholders (`your-username` and `your-blog-website`) in the URLs with your GitHub username and repository name, respectively. Additionally, make sure to create a `LICENSE` file in your repository and update the `License` section with the appropriate license information.

Good luck with your personal blog website! If you have any questions or need further assistance, feel free to ask. Happy coding!
