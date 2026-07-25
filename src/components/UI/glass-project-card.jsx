import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export function GlassProjectCard({
  title,
  excerpt,
  image,
  link,
  tags = ["React", "Supabase"],
  author = {
    name: "Selva Code",
    avatar: "https://github.com/shadcn.png",
  },
  className,
  buttonText = "Ver detalles",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-border/60 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-[#3EBD00]/60 hover:shadow-xl hover:shadow-[#3EBD00]/10 flex flex-col justify-between">
        
        {/* Imagen y Tags */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-50" />

          {/* Badges */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-background/60 backdrop-blur-md text-xs border border-white/10 hover:bg-background/90"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Botón Hover flotante */}
          {link && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-[#3EBD00] hover:bg-[#2D8700] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#3EBD00]/25 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                {buttonText}
              </motion.a>
            </div>
          )}
        </div>

        {/* Info del Proyecto */}
        <div className="flex flex-col justify-between flex-1 p-5 gap-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-[#3EBD00]">
                {title}
              </h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#3EBD00] transition-colors"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
              {excerpt}
            </p>
          </div>

          {/* Autor / Marca */}
          <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7 border border-border/50">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-foreground">
                {author.name}
              </span>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#3EBD00] hover:underline flex items-center gap-1"
              >
                <span>{buttonText}</span>
                <span>→</span>
              </a>
            )}
          </div>
        </div>

      </Card>
    </motion.div>
  );
}