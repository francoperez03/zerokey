import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>

    <body>
      <script type="module" src="/main.js"></script>
      <h1>Noir app</h1>
      <div class="input-area">
        <input id="guessInput" type="number" placeholder="Enter your guess" />
        <button id="submitGuess">Submit Guess</button>
      </div>
      <div class="outer">
        <div id="logs" class="inner"><h2>Logs</h2></div>
        <div id="results" class="inner"><h2>Proof</h2></div>
      </div>
    </body>
    </html>
  );
}