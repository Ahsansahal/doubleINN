<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MasterController;


Route::controller(MasterController::class)->group(function () {
    Route::get('/', 'home')->name('homePage');
    Route::get('/about-us', 'about')->name('about');
    Route::get('/book-publishing-services', 'bookPublishingService')->name('bookPublishingService');
    Route::get('/book-promotion-services', 'bookPromotionService')->name('bookPromotionService');
    Route::get('/book-writing-services', 'bookWritingService')->name('bookWritingService');
    Route::get('/book-editing-services', 'bookEditingService')->name('bookEditingService');
    Route::get('/book-marketing-services', 'bookMarketingService')->name('bookMarketingService');
    Route::get('/book-proofreading-services', 'bookProofreadingService')->name('bookproofreadingService');
    Route::get('/article-writing-services', 'articleWritingServices')->name('articleWritingServices');
    Route::get('/blog-writing-services', 'blogWritingServices')->name('blogWritingServices');
    Route::get('/book-cover-design-services', 'bookCoverDesignServices')->name('bookCoverDesignServices');
    Route::get('/book-trailer-services', 'bookTrailerServices')->name('bookTrailerServices');
    Route::get('/business-plan-writing-services', 'businessPlanWritingServices')->name('businessPlanWritingServices');
    Route::get('/children-book-publication-services', 'childrenBookPublicationServices')->name('childrenBookPublicationServices');
    Route::get('/author-marketing-promotion-services', 'authorMarketingPromotionServices')->name('authorMarketingPromotionServices');
    Route::get('/children-book-illustrator', 'childrenBookIllustrator')->name('childrenBookIllustrator');
    Route::get('/digital-marketing-services', 'digitalMarketingServices')->name('digitalMarketingServices');
    Route::get('/ebook-writing-services', 'ebookWritingServices')->name('ebookWritingServices');
    Route::get('/book-formatting-services', 'bookFormattingServices')->name('bookFormattingServices');
    Route::get('/audiobook-recording-services', 'audiobookRecordingServices')->name('audiobookRecordingServices');
    Route::get('/web-content-writing-services', 'webContentWritingServices')->name('webContentWritingServices');
    Route::get('/author-website-design-services', 'authorWebsiteDesignServices')->name('authorWebsiteDesignServices');
    Route::get('/pricing', 'pricing')->name('pricing');
    Route::get('/portfolio', 'portfolio')->name('portfolio');
    Route::get('/contact', 'contact')->name('contact');
    Route::get('/blogs', 'blog')->name('blog');
});