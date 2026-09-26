import { NextResponse } from "next/server";
import { z } from "zod";

import { requireAdmin } from "../route";
import { prisma } from "@/lib/prisma";

const statusSchema = z.object({
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]),
});

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = statusSchema.safeParse(await req.json());

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid appointment status." }, { status: 400 });
  }

  const { id } = await params;
  const appointment = await prisma.appointment.update({
    where: { id },
    data: { status: parsed.data.status },
  });

  return NextResponse.json({ appointment });
}