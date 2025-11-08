"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Heart, Share2, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("");
  const [postInput, setPostInput] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Raj Patel",
      avatar: "RP",
      location: "Gujarat",
      time: "2 hours ago",
      title: "Best practices for wheat cultivation",
      content:
        "I've been using कृषीNOVA for 6 months and the crop recommendations have increased my yield by 35%. Here are my top tips for wheat farming...",
      likes: 234,
      comments: 45,
      shares: 12,
      tags: ["wheat", "cultivation", "tips"],
    },
    {
      id: 2,
      author: "Priya Singh",
      avatar: "PS",
      location: "Punjab",
      time: "4 hours ago",
      title: "Dealing with pest management naturally",
      content:
        "Organic pest control methods have worked wonders for my cotton farm. No chemical pesticides needed! Here's what I did...",
      likes: 189,
      comments: 32,
      shares: 8,
      tags: ["pest-control", "organic", "cotton"],
    },
    {
      id: 3,
      author: "Vikram Kumar",
      avatar: "VK",
      location: "Karnataka",
      time: "6 hours ago",
      title: "IoT sensors transformed my farm monitoring",
      content:
        "The smart sensors have made farm monitoring so easy. I can check soil moisture and temperature from my phone anytime!",
      likes: 156,
      comments: 28,
      shares: 5,
      tags: ["iot", "sensors", "monitoring"],
    },
  ]);

  const handleAddPost = () => {
    if (postInput.trim() === "") return;

    const newPost = {
      id: posts.length + 1,
      author: "You",
      avatar: "You",
      location: "Your Location",
      time: "just now",
      title: postInput.split("\n")[0],
      content: postInput,
      likes: 0,
      comments: 0,
      shares: 0,
      tags: [],
    };

    setPosts([newPost, ...posts]);
    setPostInput("");
  };

  const topContributors = [
    { name: "Raj Patel", posts: 45, followers: 1200, avatar: "RP" },
    { name: "Priya Singh", posts: 38, followers: 980, avatar: "PS" },
    { name: "Vikram Kumar", posts: 32, followers: 850, avatar: "VK" },
    { name: "Anjali Sharma", posts: 28, followers: 720, avatar: "AS" },
  ];

  const discussions = [
    {
      title: "Best time to plant rice in North India",
      replies: 23,
      views: 456,
    },
    {
      title: "Dealing with soil degradation",
      replies: 18,
      views: 342,
    },
    {
      title: "Market prices for sugarcane",
      replies: 15,
      views: 289,
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-linear-to-br from-blue-100 to-indigo-100 p-3 rounded-lg">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Farmer Community</h1>
          </div>
          <p className="text-xl text-slate-600">
            Connect with thousands of farmers, share experiences, and learn best practices
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Farmers", value: "50K+" },
            { label: "Daily Posts", value: "1.2K" },
            { label: "Discussions", value: "8.5K" },
            { label: "Resources", value: "2.3K" },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 border-slate-200 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="p-6 border-slate-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">
                  You
                </div>
                <div className="flex-1">
                  <textarea
                    value={postInput}
                    onChange={(e) => setPostInput(e.target.value)}
                    placeholder="Share your farming experience..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end gap-2 mt-3">
                    <Button variant="outline" onClick={() => setPostInput("")}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddPost}
                      className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Posts Feed */}
            {posts.map((post) => (
              <Card key={post.id} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center font-bold text-white">
                      {post.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{post.author}</p>
                      <p className="text-sm text-slate-600">
                        {post.location} • {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">⋯</button>
                </div>

                {/* Post Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-slate-700 mb-4">{post.content}</p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button className="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">{post.shares}</span>
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card className="p-4 border-slate-200">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="p-6 border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {topContributors.map((contributor, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-linear-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                        {contributor.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          {contributor.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {contributor.posts} posts
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Popular Discussions */}
            <Card className="p-6 border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Discussions</h3>
              <div className="space-y-4">
                {discussions.map((discussion, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
                  >
                    <p className="font-semibold text-slate-900 text-sm mb-2">
                      {discussion.title}
                    </p>
                    <p className="text-xs text-slate-600">
                      {discussion.replies} replies • {discussion.views} views
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community Guidelines */}
            <Card className="p-6 border-slate-200 bg-blue-50">
              <h4 className="font-bold text-slate-900 mb-3">Community Guidelines</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Be respectful to all members</li>
                <li>✓ Share verified information</li>
                <li>✓ Help fellow farmers</li>
                <li>✓ No spam or promotions</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
