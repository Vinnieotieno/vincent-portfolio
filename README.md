My Portfolio

A modern, responsive portfolio website for Vincent Otieno, showcasing web development, digital strategy, and technical skills. Built with Next.js, React, and Tailwind CSS, it features a contact form, project gallery, blog integration, and more.

🌟 Live Demo

[https://vincent-otieno-portfolio.vercel.app/]


🚀 Features
- Responsive design for all devices
- Animated hero and background
- Project showcase with details and links
- Blog integration (Medium RSS)
- Contact form with email sending (Nodemailer + Gmail SMTP)
- Skills and About sections
- Dynamic copyright footer



🛠️ Technology Stack
- Framework: [Next.js](https://nextjs.org/) (App Router)
- Frontend: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- Icons:  Lucide React](https://lucide.dev/)
- 3D/Animation: [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [drei](https://github.com/pmndrs/drei)
- Email: [Nodemailer](https://nodemailer.com/) (Gmail SMTP)
- Blog Feed:[rss-parser](https://www.npmjs.com/package/rss-parser)



Getting the Project

1. **Clone the Repository**
bash
git clone https://github.com/Vinnieotieno/vincent-portfolio
cd vincent-portfolio


 2. **Install Dependencies**
```bash
npm install


 3. **Set Up Environment Variables**
Create a `.env.local` file in the root directory with your email SMTP credentials:
```env
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_gmail@gmail.com
EMAIL_SERVER_PASSWORD=your_gmail_app_password
EMAIL_FROM=your_gmail@gmail.com
EMAIL_SERVER_SECURE=false
```

 4. **Run the Development Server**
```bash
npm run dev
```
Visit [http://localhost:3001](http://localhost:3001) to view the site.

 5. **Build for Production**
```bash
npm run build
npm start
```


👤 Author
**Vincent Otieno**  
[GitHub](https://github.com/Vinnieotieno)  
[LinkedIn](https://www.linkedin.com/in/vincent-otieno-951585292)  
[Portfolio](https://vincent-otieno-portfolio.vercel.app/)
