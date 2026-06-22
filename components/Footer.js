import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-8 text-center">
        <p className="text-sm text-muted">© {profile.name}</p>
      </div>
    </footer>
  );
}
