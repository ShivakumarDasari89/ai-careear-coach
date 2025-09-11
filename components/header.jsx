import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from 'next/image';
import { FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 border-b backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between py-2 px-4 h-16">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={120}
            height={40}
            priority
            className="h-12 w-auto rounded-3xl object-contain transform scale-125 transition-transform duration-300 hover:scale-140"
          />
        </Link>

        {/* Right side menu */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            {/* Dashboard */}
            <Link href="/dashboard" className="ml-4 text-white hover:text-gray-300">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4 rounded-lg" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            {/* Dropdown: Growth Tools */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarIcon className="h-4 w-4 rounded-lg" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Mock Interview</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Signed Out buttons */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            {/* <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton> */}
          </SignedOut>

          {/* User profile menu */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 rounded-full",
                  userPreviewMainIdentifier: "font-semibold",
                  userButtonPopoverCard: "shadow-xl",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
