import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200 mt-15'>
            <footer className="footer sm:footer-horizontal w-8/12 mx-auto text-base-content py-20">
                <aside>
                    <img className='w-50' src="https://cdn.ittefaqbd.com/contents/themes/public/style/images/logo.svg" alt="" />
                    <p className='w-80 text-gray-500'>
                        ইত্তেফাক গ্রুপ অব পাবলিকেশন্স লিঃ-এর পক্ষে তারিন হোসেন কর্তৃক ৪০, কাওরান বাজার, ঢাকা-১২১৫ থেকে প্রকাশিত ও মুহিবুল আহসান কর্তৃক নিউ নেশন প্রিন্টিং প্রেস, কাজলারপাড়, ডেমরা রোড, ঢাকা-১২৩২ থেকে মুদ্রিত।
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="flex gap-5">
                        <img className='w-50' src="https://cdn.freebiesupply.com/logos/large/2x/available-on-the-app-store-logo-png-transparent.png" alt="" />
                        <img className='w-50' src="https://static.vecteezy.com/system/resources/previews/024/170/871/non_2x/badge-google-play-and-app-store-button-download-free-png.png" alt="" />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;