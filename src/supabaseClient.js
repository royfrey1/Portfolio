import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mpyqiqhffmecbpibmggt.supabase.co'
const supabaseAnonKey = 'sb_publishable_z68h1uetA1Rb3_NXj0XmrQ_NA3akayA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)