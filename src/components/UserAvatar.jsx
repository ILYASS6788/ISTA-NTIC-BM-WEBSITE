import React from "react";

export default function UserAvatar({user}) {
  return (
    <div class="flex items-center justify-center space-x-4">
      <div class="font-medium">
        <h5 class="text-base font-semibold text-gray-900">{user.name}</h5>
        <span class="text-sm text-gray-500">{user.email}</span>
      </div>
      <img
        class="w-10 h-10 rounded-full"
        src={`http://localhost:8000/proxy-avatar/${user.client_avatar}`}
        alt="Media rounded avatar"
      />
    </div>
  );
}
