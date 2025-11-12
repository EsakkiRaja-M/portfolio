# 🚀 Esakki Raja | Personal Portfolio

This is my personal developer portfolio website, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), originally based on [@ByteGrad's template](https://github.com/ByteGrad/portfolio-website) and fully customized with my projects, experience, and skills.

View Live: https://portfolio-esakkiraja-m.vercel.app(#)

---

## ✨ Features

- Animated About, Projects, Skills, Experience (vertical timeline), and Contact sections
- Responsive, modern design
- Email integration using [Resend](https://resend.com/) service
- Easily customized via `lib/data.ts`

---

## 🚀 Getting Started

### 1. Clone This Repository

```bash
git clone https://github.com/EsakkiRaja-M/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root folder:

```
RESEND_API_KEY=your_resend_api_key_here
```

- Get your API key from your [Resend dashboard](https://resend.com/).

### 4. Run the Development Server

```bash
npm run dev
```

- Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Customization

- **Edit your portfolio data:**  
  Open `lib/data.ts` and edit your experiences, projects, skills, and social links.

- **Change images:**  
  Place image files in `/public/images` and reference them in `lib/data.ts`.

---

## 📨 Email Contact Form

- The contact form uses [Resend](https://resend.com/) for sending emails.
- To enable, [create a Resend account](https://resend.com/), get your API key, and add it to `.env.local` as described above.
- Set your recipient email in `actions/sendEmail.ts` (the `to:` field).

---

## 🛠️ Deployment

1. **Push this repo to GitHub.**
2. **Connect to [Vercel](https://vercel.com/):**
   - Import your GitHub repo.
   - Add your `RESEND_API_KEY` as an environment variable in your project settings.
   - Click Deploy.
3. **Enjoy your live site!**

---

## 🎨 Credits

Template by [ByteGrad](https://github.com/ByteGrad/portfolio-website)  
Customized and proudly maintained by [Esakki Raja](https://github.com/EsakkiRaja-M).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
