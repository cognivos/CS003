import express from "express";
import cors from "cors";
import connectDatabase from "./db";
import sellerRoute from "./routes/seller.route";
import deliveryAgentRoute from "./routes/agent.route";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env.local")});

const app = express();
const PORT = process.env.PORT_NUMBER || 5000;

app.use(express.json());
app.use(cors());

app.use('/seller', sellerRoute);
app.use('/delivery', deliveryAgentRoute);

const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`🚀 Server listening at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Server startup failed:", error);
        process.exit(1);
    }
}

startServer();