import { app } from "./app";
import { getAllStaff } from "./endpoints/getAllStaff";
import { getStaffByName } from "./endpoints/getStaffByName";
import { getStaffByOrder } from "./endpoints/getStaffByOrder";
import { getStaffByType } from "./endpoints/getStaffByType";



app.get("/all-staff", getAllStaff)
app.get("/staff", getStaffByName)
app.get("/staff/:type", getStaffByType)
app.get("/staff-by-order", getStaffByOrder )