export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} JNI Art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
