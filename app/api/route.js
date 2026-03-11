import { NextResponse } from "next/server";
import TodoModel from "../../lib/models/TodoModel";
import ConnectDb from "../../lib/config/db";

export async function GET() {

  await ConnectDb();

  const todos = await TodoModel.find();

  return NextResponse.json({
    todos: todos
  });

}

export async function POST(request) {

  await ConnectDb();

  const { title, description } = await request.json();

  const todo = await TodoModel.create({
    title,
    description
  });

  return NextResponse.json({
    message: "Todo Created",
    data: todo
  });

}

export async function DELETE(request) {

  await ConnectDb();

  const mongoId = request.nextUrl.searchParams.get("mongoId");

  await TodoModel.findByIdAndDelete(mongoId);

  return NextResponse.json({
    message: "Todo Deleted"
  });

}

export async function PUT(request) {

  await ConnectDb();

  const { mongoId } = await request.json();

  await TodoModel.findByIdAndUpdate(mongoId,{
    $set:{
      isCompleted:true
    }
  });

  return NextResponse.json({
    message:"Todo Completed"
  });

}