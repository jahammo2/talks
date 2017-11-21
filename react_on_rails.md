react_on_rails was used/is being used on Reunion Internal. It's purpose is to allow you to put React components into your Rails views. While using `setState` and React components is nice, it's not worth bringing onto a project. This is because you can't pass children from the rails views, it will require domain knowledge, and you can't send HTTP requests from components without a lot of setup.

When I say you can't pass children, I just mean that you can't do something like this:

```
<%= react_component("ClientsIndex", props: @clients_props, prerender: false) do %>
  <%= form_for(WebProfile.new, url: client_web_profiles_path) do |f| %>
  ...
<% end %>
```

Usually `this.props.children` can be used in React but not with Rails erb html. This is a vital part of React (in my opinion) and it's unfortunate it can't be used.

It requires domain knowledge. Every technology does but it's not as simple as just bringing it onto the project. You will have to learn about it. And if you do, that time you spend learning it better pay off in some time savings. It doesn't.

You can't send HTTP requests without setting up axios or whatever. And if you're not setting up HTTP requests, you can only use react_on_rails to read data. Which is fine if that's what you want. But if you want to use forms or do any talking to the API, you're screwed. And if you do set up axios, you've basically defeated the purpose of react_on_rails. Setting up services to handle HTTP requests is fine but by that point you've basically created a typical SB frontend.

It's better to just do a separated frontend or only Rails views. If you do want to setup HTTP requests, then just go use our web boilerplate. It will take you less time to use the web boilerplate on its own. If you don't want to setup HTTP requests from frontend stuff, just keep it a simple rails app. It will take you less time to use Rails views on its own. I estimate that Reunion lost about 3 days by bringing it on instead of just using Rails views.

Your decision needs to be between standard Rails views or a separated FE. Not on this in-between garbage. My recommendation for the company is to not use react_on_rails.
