export function Card({ className = '', ...props }) {
  return <div className={`rounded-xl border border-white/10 bg-white/5 ${className}`} {...props} />
}

export function CardHeader({ className = '', ...props }) {
  return <div className={`px-4 pt-4 ${className}`} {...props} />
}

export function CardTitle({ className = '', ...props }) {
  return <h3 className={`text-base font-semibold ${className}`} {...props} />
}

export function CardContent({ className = '', ...props }) {
  return <div className={`px-4 pb-4 ${className}`} {...props} />
}
