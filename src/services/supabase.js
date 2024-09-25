import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ymgtbacklnmatxawhvqr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZ3RiYWNrbG5tYXR4YXdodnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNDI0NjksImV4cCI6MjA0MjgxODQ2OX0.1xbhcawLD4WLWDbbHkWVu-QzIrZbBKoG7-BuruVa45M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
