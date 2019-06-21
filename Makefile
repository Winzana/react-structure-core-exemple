install-all:
	yarn install && node_modules/.bin/lerna bootstrap 
	@make build-core
	@make link-all
link-all:
	cd core && yarn link
	cd web && yarn link core
	cd mobile && yarn link core
build-core:
	cd core && yarn build
build-web:
	@make build-core
	cd web && yarn build
build-ios:
	xcodebuild -project mobile/ios/mobile.xcodeproj -scheme mobile-release -archivePath mobile/ios/mobile.xcarchive archive
	xcodebuild -exportArchive -archivePath mobile/ios/mobile.xcarchive archive -exportPath ~/Downloads -exportOptionsPlist mobile/ios/mobile/ExportOptions.plist
build-android:
	cd mobile/android && ./gradlew assembleRelease
clean-all:
	rm -rf node_modules
	cd web && rm -rf node_modules
	cd core && rm -rf node_modules
	cd mobile && rm -rf node_modules