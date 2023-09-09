import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://sdpioztmfcsxmeaknnbh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkcGlvenRtZmNzeG1lYWtubmJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NzIxMzYsImV4cCI6MjAwOTQ0ODEzNn0.bQ42oh0WQoUCW9T193vOJhWJvxQo9549tEEnLtS-NQ0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
