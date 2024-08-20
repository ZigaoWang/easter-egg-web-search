# Easter Egg Web Search

Easter Egg Web Search is a playful web application that provides a search bar with a twist. If you search for specific keywords, it triggers a fun "virus effect" with videos appearing on the screen. Otherwise, it redirects you to a Google search for your query.

## Features

- **Search Bar:** Enter your query and either click the search button or press Enter.
- **Video Effects:** Special keywords trigger video effects that take over the screen.
- **Google Search:** For all other queries, the app redirects to a Google search.

## Keywords

- **Rickroll Keywords:** `rick roll`, `rick astley`, `never gonna give you up`
- **Whistle Keywords:** `whistle`, `josh`, `josh hutcherson`

## Demo

![CleanShot 2024-08-20 at 17 08 40](https://github.com/user-attachments/assets/b218fac3-39ed-4f75-8f16-85304f2ed759)


## File Structure

```
easter-egg-web-search/
│
├── assets/
│   ├── rickroll.mp4
│   └── whistle.mp4
│
├── styles.css
├── script.js
└── index.html
```

## Usage

1. **Open the application in your browser.**
2. **Type a query in the search bar.**
3. **Click the search button or press Enter.**
4. **If your query contains special keywords, enjoy the video effect!**
5. **Otherwise, you'll be redirected to a Google search for your query.

## Customization

You can customize the keywords, video sources, and appearance by editing the following files:

- **Keywords:** Modify the `rickrollKeywords` and `whistleKeywords` arrays in `script.js`.
- **Video Sources:** Change the `videoSrc` parameters in the `triggerVirusEffect` function in `script.js`.
- **Styles:** Update the styles in `styles.css` to change the appearance of the search bar and video effects.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out to [a@zigao.wang](mailto:a@zigao.wang).
