👋 Thanks for your consideration. This project is a simple payment flow built on Next.js.

View the project live: https://apayan-cedar-test.netlify.app/payment

You can also pull and run locally.
First, run `npm install`, then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


***

### Call outs:
* I extracted common components and regions from the figma into components that a developer can compose together. See the `/app/components` directory for examples, like `Input`, `Button`, and `FormField`
* Most of the page files where these components are used are located in `app/payment/` directory.
* The payment form validates not only requirement, but also formatting for credit card numbers, expiration date, and security code.
* You can manipulate the data in `app/data.json` to see content changes in real time, including the members name, amount of bills, and the total outstanding payment.

### Cut for time:
* I would love to automatically format certain values in the form, like adding spaces for the credit card number, or adding a slash in between the date parts of the expiration. These little details always delight me as a user when I encounter them in the wild. Putting in payment information is always one of the most annoying things you can do online—any little delight helps!
* In the real world, I might work with design to figure out a way for the error message below each field to not cause the inputs below to move down when they appear. It's a little jarring when an error appears—not a bit deal though.
* I wasn't able to fit unit tests into the time allotted. Would ideally like to unit test the form validation rules primarily.
* I used a mix of Tailwind and CSS Modules, mostly for time as I am more familiar with CSS Modules, but in a production environment this could use some finessing, perhaps more adoption of one system over the other.
