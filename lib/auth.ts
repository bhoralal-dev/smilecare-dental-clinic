import { SignJWT,jwtVerify } from "jose"; const secret=()=>new TextEncoder().encode(process.env.JWT_SECRET||"development-only-change-me");
export async function signAdmin(id:string,email:string){return new SignJWT({email,role:"admin"}).setProtectedHeader({alg:"HS256"}).setSubject(id).setIssuedAt().setExpirationTime("8h").sign(secret())}
export async function verifyAdmin(token?:string){if(!token)return null;try{return (await jwtVerify(token,secret())).payload}catch{return null}}
