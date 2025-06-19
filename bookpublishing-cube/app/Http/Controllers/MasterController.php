<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MasterController extends Controller
{
    public function home(){
        return view('home');
    }

    public function about(){
        return view('about');
    }
    public function bookPublishingService(){
        return view('bookPublishingService');
    }
    public function bookPromotionService(){
        return view('bookPromotionService');
    }
    public function bookWritingService(){
        return view('bookWritingService');
    }
    public function bookEditingService(){
        return view('bookEditingService');
    }
    public function bookMarketingService(){
        return view('bookMarketingService');
    }
    public function bookProofreadingService(){
        return view('bookProofreadingService');
    }
    public function articleWritingServices(){
        return view('articleWritingServices');
    }
    public function blogWritingServices(){
        return view('blogWritingServices');
    }
    public function bookCoverDesignServices(){
        return view('bookCoverDesignServices');
    }
    public function bookTrailerServices(){
        return view('bookTrailerServices');
    }
    public function businessPlanWritingServices(){
        return view('businessPlanWritingServices');
    }
    public function childrenBookPublicationServices(){
        return view('childrenBookPublicationServices');
    }
    public function authorMarketingPromotionServices(){
        return view('authorMarketingPromotionServices');
    }
    public function childrenBookIllustrator(){
        return view('childrenBookIllustrator');
    }
    public function digitalMarketingServices(){
        return view('digitalMarketingServices');
    }
    public function ebookWritingServices(){
        return view('ebookWritingServices');
    }
    public function bookFormattingServices(){
        return view('bookFormattingServices');
    }
    public function audiobookRecordingServices(){
        return view('audiobookRecordingServices');
    }
    public function webContentWritingServices(){
        return view('webContentWritingServices');
    }
    public function authorWebsiteDesignServices(){
        return view('authorWebsiteDesignServices');
    }
    public function pricing(){
        return view('pricing');
    }
    public function portfolio(){
        return view('portfolio');
    }
    public function contact(){
        return view('contact');
    }
    public function blog(){
        return view('blog');
    }
}
