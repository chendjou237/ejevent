import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const configPath = path.join(process.cwd(), 'lib', 'config.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(fileContents);
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error reading config:', error);
    return NextResponse.json({ error: 'Failed to read config' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    await fs.writeFile(configPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing config:', error);
    return NextResponse.json({ error: 'Failed to update config' }, { status: 500 });
  }
}
