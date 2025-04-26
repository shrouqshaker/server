import express from "express";
import { logger } from "./middlewares/logger";
import carRoutes from "./routes/car.routes";
import userRoutes from "./routes/user.routes";
import interestRoutes from "./routes/interest.routes";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/cars", carRoutes);
app.use("/users", userRoutes);
app.use("/interests", interestRoutes);

app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});
