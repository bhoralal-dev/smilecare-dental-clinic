import "dotenv/config";
import {prisma} from "@/lib/prisma"; import bcrypt from "bcryptjs";
async function main(){const email=process.env.ADMIN_SEED_EMAIL;const password=process.env.ADMIN_SEED_PASSWORD;if(!email||!password)throw new Error("Set ADMIN_SEED_EMAIL and ADMIN_SEED_PASSWORD before seeding.");await prisma.admin.upsert({where:{email},update:{},create:{email,passwordHash:await bcrypt.hash(password,12)}});console.log("Admin account ready.")}main().finally(()=>prisma.$disconnect());
