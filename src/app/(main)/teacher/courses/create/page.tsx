"use client";

import { Save, ArrowLeft, HelpCircle, Eye } from 'lucide-react';
import Link from "next/link";

import { useState,  } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

} from "@/components/ui/card";
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import BasicInfoForm, { BasicInfoFormValues } from './components/BasicInfoForm';
import CurriculumForm, { CurriculumFormValues } from './components/CurriculumForm';
import PricingForm, { PricingFormValues } from './components/PricingForm';
import SettingsForm, { SettingsFormValues } from './components/SettingForm';
type FormDataValues = {
  basicInfo: BasicInfoFormValues | null;
  curriculum: CurriculumFormValues | null;
  pricing: PricingFormValues | null;
  settings: SettingsFormValues | null;
};

type SectionKey = "basicInfo" | "curriculum" | "pricing" | "settings";


export default function CreateCourse() {
  const [activeSection, setActiveSection] = useState("basic-info");
  const [formData, setFormData] = useState<FormDataValues>({
    basicInfo: null,
    curriculum: null,
    pricing: null,
    settings: null,
  });
  const [completionPercentage, setCompletionPercentage] = useState(25);

  const handleBasicInfoSubmit = (data:BasicInfoFormValues) => {
    setFormData((prev) => ({ ...prev, basicInfo: data }));
    setActiveSection("curriculum");
    updateCompletionPercentage("basicInfo");
    toast("Basic information saved");
  };

  const handleCurriculumSubmit = (data:CurriculumFormValues) => {
    setFormData((prev) => ({ ...prev, curriculum: data }));
    setActiveSection("pricing");
    updateCompletionPercentage("curriculum");
    toast("Curriculum saved");
  };

  const handlePricingSubmit = (data:PricingFormValues) => {
    setFormData((prev) => ({ ...prev, pricing: data }));
    setActiveSection("settings");
    updateCompletionPercentage("pricing");
    toast("Pricing saved");
  };

  const handleSettingsSubmit = (data:SettingsFormValues) => {
    setFormData((prev) => ({ ...prev, settings: data }));
    updateCompletionPercentage("settings");
    toast("Settings saved");
    console.log("Complete form data:", {
      ...formData.basicInfo,
      ...formData.curriculum,
      ...formData.pricing,
      ...formData.settings,
    });
  };

const updateCompletionPercentage = (completedSection: SectionKey) => {
  const sections: SectionKey[] = ["basicInfo", "curriculum", "pricing", "settings"];
  
  const completedSections = sections.filter(
    (section) =>
      formData[section] !== null || section === completedSection
  );

  setCompletionPercentage(Math.round((completedSections.length / sections.length) * 100));
};


  const saveDraft = () => {
    toast("Course draft saved");
    console.log("Draft saved:", formData);
  };

  return (
    <div className="container px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Button asChild variant="outline" size="icon">
          <Link href="/design3/teacher/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Course</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-4">
          <div className="sticky top-6">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <a
                    href="#basic-info"
                    onClick={() => setActiveSection("basic-info")}
                    className={`flex items-center gap-2 p-2 rounded-md ${
                      activeSection === "basic-info"
                        ? "bg-emerald-50 text-emerald-700 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className={`h-6 w-6 rounded-full ${
                      activeSection === "basic-info" ? "bg-emerald-100" : "bg-gray-100"
                    } flex items-center justify-center text-xs`}>
                      1
                    </div>
                    <span>Basic Info</span>
                  </a>
                  <a
                    href="#curriculum"
                    onClick={() => setActiveSection("curriculum")}
                    className={`flex items-center gap-2 p-2 rounded-md ${
                      activeSection === "curriculum"
                        ? "bg-emerald-50 text-emerald-700 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className={`h-6 w-6 rounded-full ${
                      activeSection === "curriculum" ? "bg-emerald-100" : "bg-gray-100"
                    } flex items-center justify-center text-xs`}>
                      2
                    </div>
                    <span>Curriculum</span>
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setActiveSection("pricing")}
                    className={`flex items-center gap-2 p-2 rounded-md ${
                      activeSection === "pricing"
                        ? "bg-emerald-50 text-emerald-700 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className={`h-6 w-6 rounded-full ${
                      activeSection === "pricing" ? "bg-emerald-100" : "bg-gray-100"
                    } flex items-center justify-center text-xs`}>
                      3
                    </div>
                    <span>Pricing</span>
                  </a>
                  <a
                    href="#settings"
                    onClick={() => setActiveSection("settings")}
                    className={`flex items-center gap-2 p-2 rounded-md ${
                      activeSection === "settings"
                        ? "bg-emerald-50 text-emerald-700 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className={`h-6 w-6 rounded-full ${
                      activeSection === "settings" ? "bg-emerald-100" : "bg-gray-100"
                    } flex items-center justify-center text-xs`}>
                      4
                    </div>
                    <span>Settings</span>
                  </a>
                </nav>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-1">
                      Course Status
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                      Draft
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Completion</div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div 
                        className="h-2 bg-emerald-600 rounded-full" 
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {completionPercentage}% complete
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={saveDraft}
                    >
                      <Save className="mr-2 h-4 w-4" /> Save Draft
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline" className="w-full">
                      <Eye className="mr-2 h-4 w-4" /> Preview Course
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="text-sm font-medium mb-2">Need Help?</div>
                <p className="text-sm text-gray-600 mb-3">
                  Check out our course creation guides or contact support for
                  assistance.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <HelpCircle className="mr-2 h-4 w-4" /> Get Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-1">
          {activeSection === "basic-info" && (
            <div id="basic-info">
              <BasicInfoForm onSubmit={handleBasicInfoSubmit} />
            </div>
          )}

          {activeSection === "curriculum" && (
            <div id="curriculum">
              <CurriculumForm onSubmit={handleCurriculumSubmit} />
            </div>
          )}

          {activeSection === "pricing" && (
            <div id="pricing">
              <PricingForm onSubmit={handlePricingSubmit} />
            </div>
          )}

          {activeSection === "settings" && (
            <div id="settings">
              <SettingsForm onSubmit={handleSettingsSubmit} />
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button type="button" variant="outline" asChild>
              <Link href="/teacher/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
              </Link>
            </Button>
            <div className="space-x-2">
              <Button type="button" variant="outline" onClick={saveDraft}>
                Save as Draft
              </Button>
              <Button
                type="button"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Continue to Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
